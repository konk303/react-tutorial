class CommentsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.js do
        render json: { data: [{ id: 1,
                                author: 'Pete Hunt',
                                text: 'This is one comment'
                              },
                              { id: 2,
                                author: 'Jordan Walke',
                                text: 'This is *another* comment'
                              }] }
      end
    end
  end
end
